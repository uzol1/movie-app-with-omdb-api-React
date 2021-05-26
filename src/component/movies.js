import {
    Row,
    Col,
    Card,
    Tag,

} from 'antd';

const Movies = ({ Movie, clicked }) => {
    const { Meta } = Card;
    return (
        <Col style={{ margin: '20px 0' }} className="gutter-row" span={4}>
            <div className="gutter-box" onClick={clicked}>
                <Card

                    style={{ width: 200 }}
                    cover={
                        <img
                            alt=""
                            src={Movie.Poster}
                        />
                    }
                >
                    <Meta
                        title={Movie.Title}
                        description={false}
                    />
                    <Row style={{ marginTop: '10px' }} className="gutter-row">
                        <Col>
                            <Tag color="magenta">Movie / Series</Tag>
                        </Col>
                    </Row>
                </Card>
            </div>
        </Col>
    );
}
export default Movies;