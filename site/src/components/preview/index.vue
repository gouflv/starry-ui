<template>
  <div class="bg-white p-10 space-y-2xl">
    <div>
      <Typography.Title :level="1">Header1</Typography.Title>
      <Typography.Title :level="2">Header2</Typography.Title>
      <Typography.Title :level="3">Header3</Typography.Title>
      <Typography.Title :level="4">Header4</Typography.Title>
    </div>
    <div class="space-x-lg">
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="link">Link</Button>
      <Button type="text">Text</Button>
      <Button danger type="primary"> Danger </Button>
      <Button danger>Danger</Button>
      <Button danger type="primary" disabled> Danger </Button>
    </div>
    <div class="flex flex-col space-y-4">
      <Input placeholder="Basic input" style="width: 200px" />
      <Select
        placeholder="Basic select"
        :options="
          Array.from({ length: 10 }, (_, i) => ({
            label: `选项${i + 1}`,
            value: i + 1
          }))
        "
      />
    </div>
    <div>
      <Table :columns="defaultColumns" :dataSource="defaultDataSource" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Input, Select, Table, Typography } from '@starry-ui/core'

const defaultColumns = [
  { title: 'ID', dataIndex: 'id' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' }
]

const defaultDataSource = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  name: `Name ${i + 1}`,
  age: 20 + i
}))
</script>
