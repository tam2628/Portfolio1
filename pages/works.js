import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import unityGameCollage from '../public/images/works/game_collage_jpg.jpg'
import pathfindingVisualiser from '../public/images/works/pathfinding_visualiser.png'
import tsds from '../public/images/internships/tsds.png'
import listiee from '../public/images/internships/listiee.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Internships
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tsds" title="The Small Data Store" thumbnail={tsds}>
            Building a Point of Sales mobile application for small retail
            stores.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="listiee" title="Listiee" thumbnail={listiee}>
            Platform for sharing well categorized links
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>

    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="game"
            title="Rockets (Game made in Unity)"
            thumbnail={unityGameCollage}
          >
            A hyper casual game made using Unity game engine and C#.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="pathfinding_visualiser"
            title="Pathfinding Visualiser"
            thumbnail={pathfindingVisualiser}
          >
            Application that visualises different pathfinding algorithms.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
