import { action, computed, observable } from "mobx";
import { createContext } from "react";
import agent from "../api/agent";
import { ISushi } from "../models/sushi";
import { makeObservable } from 'mobx';

class SushiStore {
  constructor() {
    makeObservable(this);
  }
  @observable sushiRegistry = new Map();
  @observable sushi: ISushi | null = null;
  @observable loadingInitial = false;
  @observable submitting = false;
  @observable target = '';

  @computed get sushisByDate() {
    return Array.from(this.sushiRegistry.values()).sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
  }

  @action loadSushis = async () => {
    this.loadingInitial = true;
    try {
      const sushis = await agent.Sushis.list();
      sushis.forEach(sushi => {
        this.sushiRegistry.set(sushi.id, sushi);
        this.loadingInitial = false;
      })
    } catch (error) {
      console.log(error);
      this.loadingInitial = false;
    }
  }

  @action loadSushi = async (id: string) => {
    let sushi = this.getSushi(id);
    if (sushi) {
      this.sushi = sushi;
    } else {
      this.loadingInitial = true;
      try {
        sushi = await agent.Sushis.details(id);
        this.sushi = sushi;
        this.loadingInitial = false;
      } catch (error) {
        console.log(error);
        this.loadingInitial = false;
      }
    }
  }

  @action clearSushi = () => {
    this.sushi = null;
  }

  getSushi = (id: string) => {
    return this.sushiRegistry.get(id);
  }

  @action selectSushi = (id: string) => {
    this.sushi = this.sushiRegistry.get(id);
  }

  @action createSushi = async (sushi: ISushi) => {
    this.submitting = true;
    try {
      await agent.Sushis.create(sushi);
      this.sushiRegistry.set(sushi.id, sushi);
      this.submitting = false;
    } catch (error) {
      this.submitting = false;
      console.log(error)
    }
  }

  @action editSushi = async (sushi: ISushi) => {
    this.submitting = true;
    try {
      await agent.Sushis.update(sushi);
      this.sushiRegistry.set(sushi.id, sushi);
      this.sushi = sushi;
      this.submitting = false;
    } catch (error) {
      this.submitting = false;
      console.log(error);
    }
  }

  @action deleteSushi = async (event: any, id: string) => {
    this.submitting = true;
    this.target = event.currentTarget.name;
    try {
      await agent.Sushis.delete(id);
      this.sushiRegistry.delete(id);
      this.submitting = false;
      this.target = '';
    } catch (error) {
      this.submitting = false;
      this.target = '';
      console.log(error);
    }
  }
}


export default createContext(new SushiStore()); 