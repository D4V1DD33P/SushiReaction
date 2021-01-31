import React, { Fragment } from "react";
import { observer } from "mobx-react-lite";
import SushiDashboard from "../../features/sushis/dashboard/SushiDashboard";
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import SushiDetails from "../../features/sushis/details/SushiDetails";
import { Flex, Image, Box, Link, Menu, MenuButton, Button, MenuList, MenuItem, Container } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Fragment>
      <Flex
        bg="tomato"
        w="100%"
        px={5}
        py={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          ml="10%"
          as={NavLink}
          to="/sushis"
        >
          <Image src="/assets/sushilogo.png" boxSize="45px" />
          <Box
            pl={5}
            fontWeight="semibold"
            lineHeight="tight"
            color="white"
            isTruncated
          >
            SushiReaction
          </Box>
        </Flex>
        <Box mr="10%">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem as={NavLink} to="/sushis"> Home</MenuItem>
              <MenuItem> Test </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Container>
              <Route exact path="/sushis" component={SushiDashboard} />
              <Route path="/sushis/:id" component={SushiDetails} />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(observer(App));
