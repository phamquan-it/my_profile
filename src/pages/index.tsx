import { Inter } from "next/font/google";
import { Button, ConfigProvider, Form, Image, Input, Layout, List, Progress, Table, Timeline } from 'antd';
import Title from "antd/es/typography/Title";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { DownCircleFilled, DownCircleOutlined, FacebookFilled, GithubFilled, InstagramFilled, InstagramOutlined, XFilled, XOutlined } from "@ant-design/icons";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const dataSource = [
  {
    key: '1',
    title: 'Age',
    info: new  Date().getFullYear() - 2000
  },
  {
    key: '2',
    title: 'Email',
    info: "c2202lm.pmquan@aptech.vn"
  },
  {
    key: '3',
    title: 'Phone',
    info: "+8438837820"
  },
  {
    key: '4',
    title: 'Address',
    info: "Binh Nghia, Nghia Binh, Nghia Dan, Nghe An, Vietnam"
  },
];

const columns = [
  {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'info',
    dataIndex: 'info',
    key: 'info',
  }
];

export default function Home() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }} className="!flex !items-end">
        <div className="flex justify-between w-full">
          <div className="flex"><Title level={4} style={{ marginBottom: "0" }}>Pham Minh Quan</Title></div>
          <div className="flex gap-1 text-2xl">
            <FacebookFilled />
            <InstagramFilled />
            <GithubFilled />
            <XOutlined />
          </div>
        </div>
      </Header>
      <Footer style={{
        backgroundColor: "white",
        paddingTop: 0,
        paddingBottom: 0,
      }}>
        <div className="bg-sky-600 rounded-t-md p-4 grid  grid-cols-4" style={{ height: 200 }}>
          <Image
            width={180} className="rounded-full border-4 translate-y-4  duration-75
               " preview={false}
            src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?random`}
            alt=""
          />
          <div className="h-full flex items-center">
            <div>
              <Title level={3} style={{ color: "whitesmoke", marginBottom: 5 }}>Pham  Minh Quan</Title>
              <p className="text-sm text-white">Graphic Designer & Web Developer</p>
              <div className="flex  gap-2 mt-3">
                <Button type="default" icon={<DownCircleOutlined />}>Download CV</Button>
                <Button type="primary">Hire me</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-3">
          <Title level={4}>About me</Title>
          <div className="aboutMe  grid  grid-cols-2 border-b">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat consequuntur et officiis? Molestiae facere atque cupiditate quidem, odio sunt nisi velit saepe, accusamus minus ullam dolore aut quasi animi doloribus?</p>
            <ConfigProvider theme={{
              token: {

              }
            }}>
              <Table showHeader={false} dataSource={dataSource} columns={columns} pagination={false} />

            </ConfigProvider>
          </div>

        </div>
        <div className="border-b">
          <Title level={4}>Professional Skills
          </Title>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span>Front-end</span>
              <Progress percent={50} status="normal" type="line" showInfo={false}>1234</Progress>

            </div>
            <div>
              <span>Back-end</span>
              <Progress percent={50} status="normal" type="line" showInfo={false}>1234</Progress>
            </div>
            <div>
              <span>Cloud conputing</span>
              <Progress percent={50} status="normal" type="line" showInfo={false}>1234</Progress>
            </div>
          </div>
        </div>
        <div className="border-b mt-5">
          <Title level={3}>Work Experience</Title>
          <div className="mt-5">
            <Timeline
              items={[
                {
                  children: 'Create a services site 2015-09-01',
                },
                {
                  children: 'Solve initial network problems 2015-09-01',
                },
                {
                  children: 'Technical testing 2015-09-01',
                },
                {
                  children: 'Network problems being solved 2015-09-01',
                },
              ]}
            />
          </div>

        </div>
        <div className="border-b mt-5">
          <Title level={3}>Education</Title>
          <div className="mt-5">
            <Timeline
              items={[
                {
                  children: 'Create a services site 2015-09-01',
                },
                {
                  children: 'Solve initial network problems 2015-09-01',
                },
                {
                  children: 'Technical testing 2015-09-01',
                },
                {
                  children: 'Network problems being solved 2015-09-01',
                },
              ]}
            />
          </div>

        </div>
        <div className="border-b grid grid-cols-12 gap-3">
          <div className="col-span-12 mt-5">
            <Title level={3}>Contact</Title>
          </div>
          <div className="col-span-7">

            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <div className="grid  grid-cols-2 gap-3">
                <Form.Item

                  name="yourname"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please input your message!' }]}
              >
                <Input.TextArea placeholder="" allowClear rows={4}/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="col-span-5">
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta

                    title={<span>{item.title}</span>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </Footer>
      <Footer style={{
        backgroundColor: "white",

      }}>
        <Title level={4} className="text-center">PHAM MINH QUAN</Title>
        <ul  className="flex justify-center  gap-2">
          <li>
            <Link href={"https://www.facebook.com/pham.quan.ltv"}><FacebookFilled/></Link>
          </li>
          <li>
            <Link href={""}><XOutlined/></Link>
          </li>
          <li>
          <Link href={""}><InstagramFilled/></Link>
          </li>
          <li>
          <Link href={""}><GithubFilled/></Link>
          </li>
         
        </ul>
        <p className="text-center  my-4">
        © Right Resume. All rights reserved.
        </p>
      </Footer>
    </Layout>
  );
}
const data = [
  {
    title: 'Address',
    description:'Binh Nghia,  Nghia Binh, Nghia Dan, Nghe An, Vietnam'
  },
  {
    title: 'Phone',
    description:"+84328837820"
  },
  {
    title: 'Email',
    description:"c2202lm.pmquan@aptech.vn"
  }
];