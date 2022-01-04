import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rockets">
    <Container>
      <Badge>2019</Badge>
      <Title>Rockets</Title>
      <P>
        Built a hypercasual game made using C# and Unity game engine. The game
        has features like Shop, Abilities, Ads etc.
      </P>
      <UnorderedList>
        <ListItem>
          {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
          Improved the performance of the game using event driven pub-sub
          architecture.
        </ListItem>
        <ListItem>
          Implemented loosely coupled code to separate game logic and user
          interface.
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/tam2628/Rockets">
            https://github.com/tam2628/Rockets <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Unity game engine, C#</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/game_collage_jpg.jpg"
        alt="Rockets - Android game made in Unity game engine"
      />
    </Container>
  </Layout>
)

export default Work
