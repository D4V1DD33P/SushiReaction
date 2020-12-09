import { observer } from 'mobx-react-lite';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react'

const NavBar: React.FC = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header as={NavLink} exact to='/'>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    InteReact
                </Menu.Item>
                <Menu.Item name='Sushis' as={NavLink} to='/sushis' />
                <Menu.Item>
                    <Button as={NavLink} to='/createSushi' positive content='Create Sushi'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default observer(NavBar)
