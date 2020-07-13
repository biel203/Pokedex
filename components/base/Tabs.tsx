import React, { DOMAttributes } from "react";
import styled from "styled-components";
import { Panel as IPanel } from "../../interfaces";

const TabContent = styled("div")<{ tabindex: string }>`
  flex: 1;
  width: 100%;
`;

export const Panel = ({ children }: IPanel) => (
  <TabContent role="tabpanel" tabindex="0">
    {children}
  </TabContent>
);

interface Props {
  tabBreak?: string;
  label?: string;
}

interface State {
  children?: any;
  tabBreak?: string;
  selectedTab: number;
}

export class Tabs extends React.Component<Props, State> {
  state: State = {
    selectedTab: 0,
    tabBreak: "768px",
  };

  selectTab = (tabIndex) => {
    this.setState({ selectedTab: tabIndex });
  };

  render() {
    const { children, tabBreak } = this.props;
    const { selectedTab } = this.state;

    return (
      <TabsWrapper>
        <TabList breakPoint={tabBreak} role="tablist">
          {React.Children.map(children, (child, index) => {
            //@ts-ignore
            const { label } = child.props;
            return (
              <TabButton
                role="tab"
                selected={selectedTab === index}
                aria-selected={selectedTab === index ? "true" : "false"}
                onClick={() => this.selectTab(index)}
              >
                {label}
              </TabButton>
            );
          })}
        </TabList>

        <Content>
          {React.Children.map(children, (comp, index) =>
            selectedTab === index ? comp : undefined
          )}
        </Content>
      </TabsWrapper>
    );
  }
}

const TabsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TabButton = styled("button")<{ selected: any }>`
  flex: 1;
  color: white;
  height: 50px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: default;
  background: transparent;
  outline: none;
  transition: border-color 0.2s ease-in;
  border: none;
`;

const TabList = styled.div<{ breakPoint: string }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: ${(props) => props.breakPoint}) {
    flex-direction: column;
    & > div,
    & > div > button {
      width: 100%;
    }
  }
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  padding-top: 16px;
  border-radius: 25px;
  padding: 28px;
  background: #e5e5e5;
`;
