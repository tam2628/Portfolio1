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
  <Layout title="Listiee">
    <Container>
      <Badge>2021</Badge>
      <Title>Rockets</Title>
      <P>Platform for sharing well categorized links</P>
      <UnorderedList>
        <ListItem>
          {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
          Improved the loading speed of the site by 35% by caching using Redis.
        </ListItem>
        <ListItem>Resolved critical application bugs.</ListItem>
        <ListItem>
          Coordinated with a team of 3 to develop new features in the
          application.
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://listiee.com" target="_blank">
            https://listiee.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Node.js, Express.js, MongoDB, React, Redis</span>
        </ListItem>
      </List>

      <WorkImage src="/images/internships/listiee.png" alt="Listiee homepage" />
    </Container>
  </Layout>
)

export default Work
