'use client';
import { DateTimeInputProps, useFormValue, set } from 'sanity'
import { useEffect } from 'react';

export function DateInput(props: DateTimeInputProps) {

    const { value, onChange } = props;

    useEffect(() => {
        if (!value) {
            const now = new Date().toDateString().slice(0,10);
            console.log("now", now)
            // Set initial value only if no value is present
            onChange(set(now) );
        }
    }, [value, onChange]);

    // const date = useFormValue(['date']) as string | undefined;

    // console.log("date from form", date)
    // if (!date) {
    //     console.log("no date so setting")
    //     const now = new Date();
    //     console.log("today ios ", now)
    //     set(now, ['date'])
    //     console.log("after set")

    // }
    console.log(":props", props)
    return (
        <div>
            {props.renderDefault(props)}
        </div>
    )
}