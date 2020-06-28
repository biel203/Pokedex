import _ from "lodash";

import Tabs from "../../components/base/Tabs";

import Stats from "../../components/detail/Stats";
import About from "../../components/detail/About";

export default function DetaiMain() {
  return (
    <>
      <Tabs>
        <Tabs.Panel label={"About"}>
          <About />
        </Tabs.Panel>
        <Tabs.Panel label="Stats">
          <Stats />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
