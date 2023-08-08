'use client'

import { TabItem } from './TabItem'
import * as Tabs from '@radix-ui/react-tabs'

export function SettingsTabs() {
  return (
    <Tabs.Root>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem value="my-details" title="My details" isSelected />
        <TabItem value="profile" title="Profile" />
        <TabItem value="password" title="Password" />
        <TabItem value="team" title="Team" />
        <TabItem value="plan" title="Plan" />
        <TabItem value="billing" title="Billing" />
        <TabItem value="email" title="Email" />
        <TabItem value="notifications" title="Notifications" />
        <TabItem value="integrations" title="Integrations" />
        <TabItem value="api" title="API" />
      </Tabs.List>
    </Tabs.Root>
  )
}
