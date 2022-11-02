import { createApp, h } from "vue";
import App from "./App.vue";
import Form from "ant-design-vue/lib/form";
import Input from "ant-design-vue/lib/input";
import Button from "ant-design-vue/lib/button";
import Layout from "ant-design-vue/lib/layout";
import Menu from "ant-design-vue/lib/menu";
import Tag from "ant-design-vue/lib/tag";
import Dropdown from "ant-design-vue/lib/dropdown";
import Icon from "ant-design-vue/lib/icon";
import Card from "ant-design-vue/lib/card";
import Modal from "ant-design-vue/lib/modal";
import Table from "ant-design-vue/lib/table";
import Image from "ant-design-vue/lib/image";
import Select from "ant-design-vue/lib/select";
import Divider from "ant-design-vue/lib/divider";
import Breadcrumb from "ant-design-vue/lib/breadcrumb";
import Radio from "ant-design-vue/lib/radio";
import Checkbox from "ant-design-vue/lib/checkbox";
import Tabs from "ant-design-vue/lib/tabs";
import Spin from "ant-design-vue/lib/spin";
import InputNumber from "ant-design-vue/lib/input-number";
import DatePicker from "ant-design-vue/lib/date-picker";
import Switch from "ant-design-vue/lib/switch";
import Avatar from "ant-design-vue/lib/avatar";
import Col from "ant-design-vue/lib/col";
import Row from "ant-design-vue/lib/row";
import Collapse from "ant-design-vue/lib/collapse";
import Popconfirm from "ant-design-vue/lib/popconfirm";
import Empty from "ant-design-vue/lib/empty";
import TimePicker from "ant-design-vue/lib/time-picker";
import { Pagination, Upload, Tooltip } from "ant-design-vue";
import Drawer from "ant-design-vue/lib/drawer";
import "@/assets/styles/index.css";

const app = createApp({
  render: () => h(App),
});

const antdComponents = [
  Form,
  Input,
  Layout,
  Menu,
  Tag,
  Dropdown,
  Icon,
  Card,
  Modal,
  Table,
  Image,
  Button,
  Select,
  Divider,
  Breadcrumb,
  Radio,
  Checkbox,
  Tabs,
  Spin,
  InputNumber,
  Popconfirm,
  DatePicker,
  Switch,
  Col,
  Row,
  Avatar,
  Empty,
  Pagination,
  TimePicker,
  Upload,
  Tooltip,
  Collapse,
  Drawer,
];

antdComponents.forEach((component) => app.use(component));

app.mount("#app");
