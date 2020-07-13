import _ from "lodash";

import { Tabs, Panel } from "../../components/base/Tabs";

import React from "react";
import Stats from "../../components/detail/Stats";
import About from "../../components/detail/About";

export default function DetaiMain() {
  return (
    <>
      <Tabs>
        <Panel label={"About"}>
          <About />
        </Panel>
        <Panel label="Stats">
          <Stats />
        </Panel>
      </Tabs>
    </>
  );
}
