import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input from 'material-ui/Input';
import ActiveComp from '@material-ui/icons/FiberManualRecord';
import fieldStyles from './field-styles';

// for unit testing only
export class RawConfiguredField extends React.Component {
  shouldComponentUpdate = nextProps => this.props.data !== nextProps.data
  render() {
    const {
      classes = {}, data, type, descriptionText, activeCompColor, helpText, Component = Input, LabelComponent, labelComponentProps = {},
      title, className, componentProps = {}, id,
    } = this.props;
    return (
      <FormControl className={classNames(classes.root, { [classes.withLabel]: LabelComponent })} style={{ flexDirection: (activeCompColor) ? 'row' : 'column' }}>
        {LabelComponent && title &&
          <LabelComponent
            {...labelComponentProps}
          >{title}
          </LabelComponent>
        }
        {descriptionText && <p className={classes.description}>{descriptionText}</p>}
        {activeCompColor && <ActiveComp style={{
              flexBasis: '6%',
              top: 22,
              position: 'relative',
              marginRight: 10,
              color: activeCompColor || 'grey',
            }}
        />}
        <Component
          className={className && classes[className]}
          value={data}
          type={type}
          {...componentProps}
        />
        {helpText && <FormHelperText id={`${id}-help`}>{helpText}</FormHelperText>}
      </FormControl>
    );
  }
}
export default withStyles(fieldStyles)(RawConfiguredField);
