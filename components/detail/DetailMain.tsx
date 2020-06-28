import _ from "lodash";

import Tabs from "../../components/base/Tabs";

import Stats from "../../components/detail/Stats";
import About from "../../components/detail/About";
import Evolution from "../../components/detail/Evolution";

export default function DetaiMain() {
  return (
    <>
      <Tabs>
        <Tabs.Panel label="About">
          <About />
        </Tabs.Panel>
        <Tabs.Panel label="Stats">
          <Stats />
        </Tabs.Panel>
        <Tabs.Panel label="Evolution">
          <Evolution />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
