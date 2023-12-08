
import { Menu, Layout, Row, Col, Card } from 'antd';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
const { Header, Content } = Layout;


const NewestShip = ({
    name,
    imageUrl,
    backImage,
    description,
    deckUrl,
    yearOfBuild,
    totalGuests,
    grandSuite,
    suite,
    frenchBalcony,
    deluxeBalcony,
    classic,
    lenght,
    width,
    stateroomDescritpion,
    grandSuiteImg1,
    grandSuiteImg2,
    grandSuiteImg3,
    grandSuiteImg4,

}) => {
    const [currentPage, setCurrentPage] = useState('overview');
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'overview':
                return (
                    <div>
                        {console.log(stateroomDescritpion)}
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <Row gutter={16}>
                            <Col span={12}>
                                <img src={imageUrl} alt={name} style={{ width: '100%' }} />
                            </Col>
                            <Col span={12}>
                                {/* Info surrounded by frame */}
                                <Card title="Ship Info" bordered={true}>
                                    <p><strong>Year of Build:</strong> {yearOfBuild}</p>
                                    <p><strong>Total Guests:</strong> {totalGuests}</p>
                                    <p><strong>Grand Suite:</strong> {grandSuite}</p>
                                    <p><strong>Suite:</strong> {suite}</p>
                                    <p><strong>French Balcony:</strong> {frenchBalcony}</p>
                                    <p><strong>Deluxe Balcony:</strong> {deluxeBalcony}</p>
                                    <p><strong>Classic:</strong> {classic}</p>
                                    <p><strong>Lenght:</strong> {lenght}</p>
                                    <p><strong>Width:</strong> {width}</p>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                );

            case 'deckPlan':
                return (
                    <div>
                        <h1>Deck Plan</h1>
                        {/* Image under the title */}
                        <img src={deckUrl} alt={name} style={{ width: '100%', marginTop: '20px' }} />
                    </div>
                );

            case 'staterooms':
                return (
                    <>
                        <h1>Staterooms</h1>
                        <p>{stateroomDescritpion}</p>

                        <div className="my-component">
                            <Carousel activeIndex={index} onSelect={handleSelect} style={{ maxWidth: '450px', marginBottom: '100px' }}>
                                <Carousel.Item>
                                    <img src={grandSuiteImg1} alt="image" style={{ height: '300px', objectFit: 'cover' }} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={grandSuiteImg2} alt="image" style={{ height: '300px', objectFit: 'cover' }} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={grandSuiteImg3} alt="image" style={{ height: '300px', objectFit: 'cover' }} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={grandSuiteImg4} alt="image" style={{ height: '300px', objectFit: 'cover' }} />
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </>
                );
            default:
                return null;
        }
    }

    return (
        <Layout>
            <img src={backImage} alt={name} style={{ width: '100%', marginBottom: '20px' }} />
            <Header>
                {/* Image on top */}
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item key="overview" onClick={() => setCurrentPage('overview')}>
                        Overview
                    </Menu.Item>
                    <Menu.Item key="deckPlan" onClick={() => setCurrentPage('deckPlan')}>
                        Deck Plan
                    </Menu.Item>
                    <Menu.Item key="staterooms" onClick={() => setCurrentPage('staterooms')}>
                        Staterooms
                    </Menu.Item>
                    {/* Add more menu items as needed */}
                </Menu>
            </Header>

            <Content style={{ padding: '20px' }}>
                {/* Render the current page */}
                {renderPage()}
            </Content>
        </Layout>
    );

}
export default NewestShip;
