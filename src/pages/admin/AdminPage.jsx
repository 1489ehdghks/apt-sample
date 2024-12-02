import React from 'react';
import { Layout, Menu, Card, Row, Col, Button, Badge } from 'antd';
import { HomeOutlined, SettingOutlined, LogoutOutlined, ProjectOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './AdminPage.scss';

const { Header, Sider, Content } = Layout;


/**
* 프로젝트 목록 관리
* @type {projects[]}
* @param {string} id - 라우팅 경로나 key값으로 사용됨
* @param  {string} name - 메뉴에 표시될 프로젝트명
* @param  {'active' | 'pending'} status - 프로젝트 상태 (active: 활성화중, pending: 준비중)
* @param  {string} description - 프로젝트에 대한 간단한 설명
* @param  {string} lastUpdated - 최근 업데이트 날짜
* @param  {'internal' | 'external'} type - 프로젝트 유형 (internal: 내부 라우팅, external: 외부 링크)
* @param  {string} [url] - external 타입인 경우 이동할 외부 링크 주소
*/


const projects = [
  {
    id: 'leciel',
    name: '르씨엘',
    status: 'active',    
    description: '천안 르씨엘 분양 프로젝트',
    lastUpdated: '2024-11-25',
    type: 'internal'
  },
  {
    id: 'xi',
    name: '자이',
    status: 'active',
    description: '자이아파트 분양 프로젝트',
    lastUpdated: '2024-11-29',
    type: 'internal'
  },
  {
    id: 'hillstate',
    name: '힐스테이트',
    status: 'active',
    description: '힐스테이트 분양 프로젝트',
    lastUpdated: '2024-11-29',
    type: 'internal'
  },
  {
    id: 'lemian',
    name: '레미안',
    status: 'active',
    description: '레미안 분양 프로젝트',
    lastUpdated: '2024-11-29',
    type: 'internal'
  },
  {
    id: 'Github',
    name: 'APPO (Github)',
    status: 'pending',
    description: 'Apartment Planning & Project Organization',
    lastUpdated: '2024-11-25',
    type: 'external',
    url: 'https://github.com/1489ehdghks/apt-sample'
  },
  {
    id: 'Figma',
    name: 'APPO (Figma)',
    status: 'pending',
    description: '개발 준비중',
    lastUpdated: '2024-11-25',
    type: 'external',
    url: 'https://www.figma.com/board/UgXJDjlxxGh1IVXjqWdqDA/Untitled?node-id=0-1&node-type=canvas&t=u3x6jsCLag16xeCO-0'
  }
];

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/admin/login');
  };

  const navigateToProjectDashboard = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
      if (project.type === 'external') {
        window.open(project.url, '_blank');
      } else {
        navigate(`/${projectId}`);
      }
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { color: 'green', text: '운영중' },
      pending: { color: 'orange', text: '준비중' },
      completed: { color: 'blue', text: '완료' }
    };
    return statusConfig[status] || { color: 'default', text: '상태없음' };
  };

  const menuItems = [
    {
      key: 'dashboard',
      icon: <HomeOutlined />,
      label: '대시보드'
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: '프로젝트',
      children: projects.map((project, index) => ({
        key: `menu-item-${project.id}-${index}`,
        label: project.name,
        onClick: () => project.type === 'external' 
          ? window.open(project.url, '_blank')
          : navigateToProjectDashboard(project.id)
      }))
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '설정'
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '로그아웃',
      onClick: handleLogout
    }
  ];
 

  return (
    <Layout className="admin-dashboard">
      <Sider width={250}>
        <div className="logo">관리자 페이지</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            대시보드
          </Menu.Item>
          <Menu.SubMenu key="sub1" icon={<ProjectOutlined />} title="프로젝트">
            {projects.map(project => (
              <Menu.Item 
                key={project.id}
                onClick={() => navigateToProjectDashboard(project.id)}
              >
                {project.name}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
          <Menu.Item key="2" icon={<SettingOutlined />}>
            설정
          </Menu.Item>
          <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
            로그아웃
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="dashboard-header">
          <h2>프로젝트 대시보드</h2>
        </Header>
        <Content className="dashboard-content">
        <Row gutter={[16, 16]}>
  {projects.map((project, index) => ( 
    <Col xs={24} sm={12} key={`project-card-${project.id}-${index}`}> 
      <Card 
        className="project-card"
        title={
          <div className="project-card-header">
            <span>{project.name}</span>
            <Badge {...getStatusBadge(project.status)} />
          </div>
        }
        actions={[
          <Button 
            type="primary" 
            onClick={() => navigateToProjectDashboard(project.id)}
          >
            {project.type === 'external' ? '페이지로 이동' : '대시보드로 이동'}
          </Button>
        ]}
      >
        <p>{project.description}</p>
        <p className="last-updated">
          최근 업데이트: {project.lastUpdated}
        </p>
      </Card>
    </Col>
  ))}
</Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPage;