import React from 'react';
import DatePicker from 'material-ui-pickers/DatePicker';
import TimePicker from 'material-ui-pickers/TimePicker';
import DateTimePicker from 'material-ui-pickers/DateTimePicker';

const renderPickerComp = (type) => {
  switch (type) {
    case 'material-date':
      return {
        PickerComp: DatePicker,
        maskInput: [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        format: 'DD-MM-YYYY',
        placeholder: '__-__-____',
      };
    case 'material-time':
      return {
        PickerComp: TimePicker,
        maskInput: [/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M'],
        format: 'hh:mm A',
        placeholder: '__:__ __',
      };
    case 'material-datetime':
      return {
        PickerComp: DateTimePicker,
        maskInput: [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M'],
        format: 'DD-MM-YYYY hh:mm A',
        placeholder: '__-__-___ __:__ __',
      };
    default:
      return DatePicker;
  }
};

export default ({ path, label, title, value, htmlId, type, onChange, ...rest }) => {
  const { PickerComp, maskInput, placeholder, format } = renderPickerComp(type);
  return (
        <div
          id={htmlId}
          key={`material-date-picker-${label}`}
          className='material-form-datepicker'
          style={{ 
            'display': 'contents',
            '&>div': {
              flexBasis: '100%',
            },
          }}
        >
            <PickerComp
                keyboard
                format={format}
                style={{ flexBasis: '100%' }}
                placeholder={placeholder}
                label={label}
                // handle clearing outside => pass plain array if you are not controlling value outside
                mask={val => (val ? maskInput : [])}
                value={(!value) ? null : value}
                onChange={onChange}
                maxDate={'2200-01-01'}
                disableOpenOnEnter
                animateYearScrolling={false}
            />
        </div>
  );
};
