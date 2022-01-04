import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Pathfinding Visualiser">
    <Container>
      <Badge>2020</Badge>
      <Title>Pathfinding Visualiser</Title>
      <P>
        A visualization tool for various pathfinding algorithms. I built this
        application because I was fascinated by pathfinding algorithms, and I
        wanted to visualize them in action. I hope that you enjoy playing around
        with this visualization tool just as much as I enjoyed building it.
      </P>
      <P>
        You have the ability to create barriers and see how the algorithms avoid
        them and find the path
      </P>
      <UnorderedList my={4}>
        <ListItem>Used pure typescript without any frontend library.</ListItem>
        <ListItem>
          Made use of pub-sub architecture to handle complex events and manage
          global state.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browsers</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Typescript, HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/tam2628/pathfinding-visualiser-1">
            github.com/tam2628/pathfinding-visualiser-1{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/pathfinding_visualiser.png"
        alt="Pathfinding visualiser for browsers written in pure typescript"
      />
    </Container>
  </Layout>
)

export default Work
