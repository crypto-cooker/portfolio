import styled, { css } from "styled-components";

interface WrapperProps {
  fullWidth?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-width: 50%;
  padding: 8px;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      flex: none;
      width: 100%;
      margin-bottom: 32px;
    `};
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 8px;
`;

const Select = styled.select`
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.5);
  height: 54px;
  min-width: 240px;
  padding: 0 16px;
  width: 100%;
  -webkit-appearance: none;
`;

interface FieldSelectProps {
  fullWidth?: boolean;
  current: string;
  options: string[];
  label: string;
  onChange: (value: string) => {};
}

function FieldSelect({
  current,
  options,
  label,
  onChange,
  ...rest
}: FieldSelectProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    onChange(event.target.value);

  return (
    <Wrapper {...rest}>
      <Label>{label}</Label>
      <Select value={current} onChange={handleChange}>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
}

export { FieldSelect };
