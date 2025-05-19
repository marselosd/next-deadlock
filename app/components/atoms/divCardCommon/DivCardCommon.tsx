'use client';
import { CardCommon } from '@/app/types/interfaces/interfaces';
import React from 'react';

export default function DivCardCommon({ children }: CardCommon) {
  return (
    <div className="p-6 bg-[#2E2E2E] border-l-4 border-[var(--color-bg-primary)] rounded-md text-white my-6 mx-4 max-w-full lg:p-8 lg:my-8 lg:mx-auto lg:max-w-[800px] lg:border-l-[5px]">
      {children}
    </div>
  );
}