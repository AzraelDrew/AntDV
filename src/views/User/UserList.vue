<!--
 * @Author       : yznaisy
 * @Date         : 2020-08-16 13:54:10
 * @LastEditors  : yznaisy
 * @LastEditTime : 2020-08-20 14:26:09
 * @FilePath     : \antdv\src\views\User\UserList.vue
-->
<template>
  <a-table :columns="columns" :data-source="data">
    <span slot="action" slot-scope="text, record">
      <a>Delete</a>
      <a-divider type="vertical" />
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    title: "姓名",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
