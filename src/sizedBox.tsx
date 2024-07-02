import { FC } from "react"

interface Props {
    width?: number,
    heigth?: number,
}

export const SizedBox:FC<Props> = ({heigth, width}) => {
    return <div style={{ width: width ?? 'unset', height: heigth ?? 'unset'}} />
}