import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: '147px',
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            value={props.value}
        />
    )
}

export default SuperRange
