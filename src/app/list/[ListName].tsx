import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';



const ComponentName = () => {
  return (
    <div>

    </div>
  )
}



export default function List({ pageTitle_GeneralText, pageTitle_BoldText }: {
  pageTitle_GeneralText: string,
  pageTitle_BoldText: string
}) {
  return (
    <div>
      <div>{pageTitle_GeneralText}</div>
      <div>{pageTitle_BoldText}</div>
    </div>
  )
}