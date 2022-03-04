import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { LatestRecipes } from '../components/LatestRecipes';
import LatestTale from '../components/LatestTale';
import Quotes from '../components/Quotes';
import { TextBlock } from '../components/TextBlock';
import { Intro } from '../components/Intro'
import Ration from '../assets/travelerRation.jpg';
import TaleMackarel from '../assets/taleMackarel.jpg';

export default function Home() {

  
  return (
  <div>
    <TextBlock 
      textblock="The Project"
    />
    <Intro />
    <TextBlock 
      textblock="Latest Recipes"
    />
    <Container>
      <Row>
        <Col lg={4} sm={12}>
        <LatestRecipes
          title="Fine Traveler's Ration"
          substitle="From crunchy pickles to fresh fruits, exquisite breads and sausages."
          foodpic={<img src={Ration}/>}
          />
        </Col>
        <Col lg={4} sm={12}>
        <LatestRecipes
          title="A Random Pie"
          substitle="One of my favourite pie recipes. Random test here just to see how it looks like."
          foodpic={<img src={Ration}/>}
          />
        </Col>
        <Col lg={4} sm={12}>
        <LatestRecipes
          title="Lembas - Elven Bread"
          substitle="Interpretation from Tolkien's Lembas. Random test here just to see how it looks like."
          foodpic={<img src={Ration}/>}
          />
        </Col>
      </Row>
    </Container>
    <TextBlock
      textblock="Latest Tale"
    />
    <LatestTale 
      taletitle="Loving memories of smoked mackarel."
      talecontent="I grew comfortable around this splendorous grove where the leaves from the trees shine like gold during the autumn. 
      I who was once an avidious traveler and had seen almost every corner of the world, the highest mountains, the clearest lakes, the deserts and the snow, havent found anything as beautiful as my grove.
      It mustve been more than ten years by now since the day I adventured with my group for the last time, but our last day together will forever haunt my memories. 
      Back in those days we were filled with confidence and drive and our hearts were in the right place - wherever the gold was. 
      I wouldnt say that any of us had ill intentions or anyone in particular deserved the end they had but truth be told we deserved no sympathy either."
      talepic={<img src={TaleMackarel} height="250"/>}
      />
    <TextBlock
      textblock="Quote of the day"
    />
   <Quotes />
  </div>
)
  }

