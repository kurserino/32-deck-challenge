import * as stylex from "@stylexjs/stylex";
import {
  KeyboardEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useOnClickOutside } from "usehooks-ts";
import { Input, InputProps } from "..";
import { styles } from "./styles";
import { Maybe } from "@types";

export type AutoFillInputProps = InputProps & {
  options?: string[] | Object[];
  onTextChange: (value: Maybe<string>) => void;
  onChange: (value: string | unknown) => void;
  optionName?: (index: number) => Maybe<string>;
  defaultValue?: string;
};

export const AutofillInput = ({
  name,
  label,
  placeholder,
  type = "text",
  isLast,
  options,
  onChange,
  onFocus,
  onBlur,
  onTextChange,
  optionName,
  defaultValue = "",
}: AutoFillInputProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<Maybe<string>>(defaultValue);
  const [cursor, setCursor] = useState<number>(0);

  useOnClickOutside(wrapperRef, () => setIsFocused(false));

  const handleIgnoreUpAndDownArrow: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };

  const handleCursor = useCallback(
    (event: KeyboardEvent) => {
      if (isFocused && options?.length) {
        if (event.key === "ArrowUp" && cursor > 0) {
          setCursor((prevState) => prevState - 1);
        } else if (event.key === "ArrowDown" && cursor < options.length - 1) {
          setCursor((prevState) => prevState + 1);
        } else if (event.key === "Enter" && options[cursor]) {
          const optionValue = optionName
            ? optionName(cursor)
            : (options[cursor] as string);
          setIsFocused(false);
          setValue(optionValue);
          onChange(options[cursor]);
        }
      }
    },
    [isFocused, cursor, options]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleCursor);

    return () => {
      window.removeEventListener("keydown", handleCursor);
    };
  }, [cursor, options]);

  useEffect(() => {
    if (optionsRef.current && options?.length) {
      const wrapperHeight = optionsRef.current.clientHeight;
      const itemHeight = 35;
      const itemsToShow = Math.floor(wrapperHeight / itemHeight);
      const cursorPosWithinVisible = cursor - itemsToShow;
      if (cursorPosWithinVisible >= 0) {
        const scrollY = cursorPosWithinVisible * itemHeight;
        optionsRef.current.scrollTop = scrollY;
      }
    }
  }, [cursor, options]);

  useEffect(() => {
    if (isFocused) onTextChange(value);
  }, [value]);

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (!isFocused) setCursor(0);
  }, [isFocused]);

  return (
    <div ref={wrapperRef} {...stylex.props(styles.wrapper)}>
      <Input
        name={name}
        label={label}
        placeholder={placeholder}
        type={type}
        isLast={isLast}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          if (!isFocused) onBlur?.(e);
        }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setCursor(0);
        }}
        onKeyDown={handleIgnoreUpAndDownArrow}
      />
      {isFocused && options && (
        <div
          ref={optionsRef}
          className="options"
          {...stylex.props(styles.optionsWrapper)}
        >
          {options.map((option, index) => {
            const optionValue = optionName
              ? optionName(index)
              : (option as string);

            return (
              <div
                key={index}
                onClick={() => {
                  setIsFocused(false);
                  setValue(optionValue);
                  onChange(option);
                }}
                {...stylex.props(
                  styles.option,
                  index === options.length - 1 && styles.lastOption,
                  cursor === index && styles.optionCursor
                )}
              >
                {optionValue}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
