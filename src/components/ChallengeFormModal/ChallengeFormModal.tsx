import { close } from "@assets";
import {
  AutofillInput,
  Button,
  ColorIdentitySymbols,
  Input,
} from "@components";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./styles";
import { ChallengeFormModalProps } from "./types";
import { useChallengeFormModal } from "./useChallengeFormModal";

export const ChallengeFormModal = (props: ChallengeFormModalProps) => {
  const { state, actions } = useChallengeFormModal(props);

  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.formWrapper)}>
        <div {...stylex.props(styles.formHeader)}>
          <ColorIdentitySymbols
            colorIdentity={props.colorIdentity}
            style={styles.colorIdentity}
          />
          <button
            onClick={actions.handleCloseModal}
            {...stylex.props(styles.closeButton)}
          >
            <img src={close} {...stylex.props(styles.closeButtonIcon)} />
          </button>
        </div>
        <AutofillInput
          label="Select your commander:"
          name="commander"
          placeholder="Start typing a name"
          onChange={actions.handleOptionChangeByType("commander")}
          onTextChange={actions.handleTextChangeByType("commander")}
          options={state.results}
          optionName={actions.handleResultsOptionName}
          defaultValue={state.commander?.name}
          onBlur={actions.handleResultsReset}
          onFocus={actions.handleFocusByType("commander")}
        />
        {state.hasPartner && (
          <AutofillInput
            label="Select your partner:"
            name="partner"
            placeholder="Start typing a name"
            onChange={actions.handleOptionChangeByType("partner")}
            onTextChange={actions.handleTextChangeByType("partner")}
            options={state.results}
            optionName={actions.handleResultsOptionName}
            defaultValue={state.partner?.name}
            onBlur={actions.handleResultsReset}
            onFocus={actions.handleFocusByType("partner")}
          />
        )}
        {state.hasBackground && (
          <AutofillInput
            label="Select your background:"
            name="background"
            placeholder="Start typing a name"
            onChange={actions.handleOptionChangeByType("background")}
            onTextChange={actions.handleTextChangeByType("background")}
            options={state.results}
            optionName={actions.handleResultsOptionName}
            defaultValue={state.background?.name}
            onBlur={actions.handleResultsReset}
            onFocus={actions.handleFocusByType("background")}
          />
        )}
        <Input
          label="Theme:"
          name="theme"
          placeholder="Ex: +1/+1 Counters, Blink, etc."
          onChange={actions.handleThemeChange}
          value={state.theme}
        />
        <Input
          label="Decklist:"
          name="decklist"
          placeholder="URL of your deck list (Optional)"
          isLast
          onChange={actions.handleDecklistUrlChange}
          value={state.decklistUrl}
        />
        <div {...stylex.props(styles.buttonsWrapper)}>
          <Button
            variant="primary"
            onClick={actions.handleConfirm}
            {...stylex.props(styles.confirmButton)}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
