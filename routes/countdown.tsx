/** @jsx h */

import { h } from "$fresh/runtime.ts";
import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  return (
    <p>
      Thebig event is happening <Countdown target={date.toISOString()} />
    </p>
  );
}
