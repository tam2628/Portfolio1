import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The Small Data Store">
    <Container>
      <Badge>2021 - </Badge>
      <Title>The Small Data Store</Title>
      <P>
        Early stage startup a Point of Sales mobile application for small retail
        store in India.
      </P>
      <P>
        {`We're maintaining a global database for the products that the store
        owner can add to their inventory. Standardising products allows us to
        run analytics on region wide basis. It also allows us to provide
        efficient analytics to our customers.`}
      </P>
      <P>The features being implemented at the alpha stage are:</P>
      <UnorderedList>
        <ListItem>Managing Sales and Purchase</ListItem>
        <ListItem>Inventory Management</ListItem>
        <ListItem>Employees and Customer Handling</ListItem>
      </UnorderedList>
      <P style={{ marginTop: '10px' }}>My contribution to the company:</P>
      <UnorderedList>
        <ListItem>
          {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
          Leading a technical team to launch the MVP for alpha testing.
        </ListItem>
        <ListItem>Wrote the application code from scratch.</ListItem>
        <ListItem>Designed the backend of the application on AWS.</ListItem>
        <ListItem>
          Conducted interviews to hire new engineering interns.
        </ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://thesmalldatastore.com" target="_blank">
            https://thesmalldatastore.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android, PWA</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Typescript, Golang, AWS ( EC2, S3, MongoDB, ElasticSearch,
            Athena, Data Lake, Simple Mail Service )
          </span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/internships/tsds.png"
        alt="The small data store homepage"
      />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/internships/tsds_images/login_screen.png"
          alt="The small data store login page"
        />
        <WorkImage
          src="/images/internships/tsds_images/sales_screeen.png"
          alt="The small data store sales page"
        />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/internships/tsds_images/manage_customer.png"
          alt="The small data store manage customer page"
        />
        <WorkImage
          src="/images/internships/tsds_images/customer_modal.png"
          alt="The small data store customer modal page"
        />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage
          src="/images/internships/tsds_images/inventory.png"
          alt="The small data store inventory management page"
        />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
