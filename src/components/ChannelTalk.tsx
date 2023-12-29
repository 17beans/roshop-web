import Image from "next/image";
import Link from "next/link";
import Stack from '@mui/material/Stack';

"use client";

// Channel Talk
import * as ChannelService from '@channel.io/channel-web-sdk-loader';
ChannelService.loadScript()


const ComponentName = () => {
  return (
    <div>

    </div>
  )
}

ChannelService.boot({
  "pluginKey": "8f6cb423-87e9-483f-a6f4-0ab292ef1fbf",
});



export default function ChannelTalk({ }: {}) {
  return (
    <div>

    </div>
  )
}