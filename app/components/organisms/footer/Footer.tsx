import React from "react";
import TextCommon from "../../atoms/textCommon/TextCommon";

export default function Footer() {
  return (
    <>
      <footer className="bg-[var(--color-bg-third)] fixed bottom-0 left-0 w-full p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-center gap-2 z-50">
        <TextCommon className="text-center sm:text-left">©2025 Marcelo Dalcin, NextDeadlock</TextCommon>
        <TextCommon className="text-center sm:text-left">All image rights to Valve</TextCommon>
        <TextCommon className="text-center sm:text-left">Special thanks to DeadlockAPI</TextCommon>
      </footer>
    </>
  );
}