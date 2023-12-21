import { useContext } from "react";
import styled from "styled-components";
import { animations, presets } from "@steveeeie/react-page-transition";
import { AppContext } from "./AppContext";
import { FieldSelect } from "./FieldSelect";

const Wrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

function Form() {
  const appContext = useContext(AppContext);

  if (appContext) {
    return (
      <Wrapper>
        <FieldSelect
          current={appContext.preset || ""}
          fullWidth
          label="Preset"
          options={Object.keys(presets)}
          onChange={async (value) => appContext.setPreset(value)}
        />

        <FieldSelect
          current={appContext.enterAnimation || ""}
          label="Enter Override"
          options={Object.keys(animations)}
          onChange={async (value) => appContext.setEnterAnimation(value)}
        />

        <FieldSelect
          current={appContext.exitAnimation || ""}
          label="Exit Override"
          options={Object.keys(animations)}
          onChange={async (value) => appContext.setExitAnimation(value)}
        />
      </Wrapper>
    );
  }

  return null;
}

export { Form };
