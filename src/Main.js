import React, { Component } from 'react';
import { SectionsContainer, Section, Header } from 'react-fullpage';
import Button from 'material-ui/Button';
import Card, { CardContent, CardHeader, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import UserDetails from './components/UserDetails/UserDetails';

import './App.css';

const myString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis maximus pellentesque. Maecenas et varius elit. Nulla a mauris varius, sodales magna sed, sagittis justo. Aliquam dapibus lacus feugiat, pulvinar mi in, hendrerit ligula. Morbi volutpat mauris nulla, non cursus leo efficitur vitae. Sed accumsan cursus erat eget feugiat. Duis in semper enim. Curabitur ac libero aliquet, auctor ligula vestibulum, sodales nisl. Donec a dui accumsan, efficitur mi sit amet, dapibus dui. Fusce finibus varius augue, et tempor ligula molestie et.\n\nCras finibus convallis dui, et blandit purus lacinia eleifend. Pellentesque pretium nulla ac ex euismod, vitae ultrices turpis fermentum. Donec vel leo massa. Nulla vulputate justo et dignissim iaculis. In tellus nisi, molestie eget mollis in, posuere sit amet augue. Phasellus et arcu dui. Nam metus diam, maximus a porttitor a, convallis et elit. Suspendisse pulvinar rhoncus tempor. Etiam lorem mi, venenatis quis fermentum cursus, placerat efficitur justo. Fusce in neque sed quam ornare suscipit at quis purus. Donec quis ullamcorper enim. Morbi dignissim enim eros, at malesuada velit dignissim nec. Aliquam vel lacus arcu. Maecenas volutpat convallis tortor vitae tempus. Proin et quam quis tortor tincidunt tincidunt eu non mauris. Donec vestibulum quis ligula et finibus.';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  render() {
    const options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      arrowNavigation: true,
      scrollCallback: states => this.setState({ current: states.activeSection }),
    };

    const { current } = this.state;

    return (
      <div>
        <Header
          className="myHeader"
          style={{
            height: '65px',
            width: '100vw',
            backgroundColor: '#fff',
            position: 'fixed',
            zIndex: 5,
            opacity: 0.4,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button href="#sectionOne">home</Button>
          <Button href="#sectionTwo">about me</Button>
          <Button href="#sectionThree">projects Showcase</Button>
        </Header>
        <SectionsContainer className="container" {...options} activeSection={current}>
          <Section className="custom-section" verticalAlign="true" color="#9575CD">
            <UserDetails />
          </Section>
          <Section verticalAlign="true" color="#FFCA28">
            <div className="SectionTwo">
              <Card>
                <CardContent>
                  <Typography variant="headline" component="h2">Live From Space</Typography>
                  {myString.split('\n').map(item => (
                    <Typography variant="subheading" component="p">
                      {item}
                    </Typography>
                  ))}

                </CardContent>
              </Card>
            </div>
          </Section>
          <Section verticalAlign="true" color="#66BB6A">
            <div className="SectionThree">
              <div className="three">
                {[1, 2, 3, 4, 5, 6].map(item => (
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe">
                          R
                        </Avatar>
                      }
                      title="Shrimp and Chorizo Paella"
                    />
                    <CardContent>
                      <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Try it now
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </div>
            </div>
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}


export default Main;
