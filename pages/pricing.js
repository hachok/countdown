import { Heading, Page } from "@shopify/polaris";

const Pricing = () => (
  <Page>
    <Heading>You created a new page called Pricing</Heading>
    <p>You can visit this page by appending "/Pricing" to your URL</p>
    <p>You can edit this page in "/pages/Pricing</p>
    <p>For information on Next.js dynamic routing <a href="https://nextjs.org/learn/basics/navigate-between-pages" target="_blank">check out their documentation</a></p>
    <p>For information about navigation within the admin frame, <a href="https://help.shopify.com/en/api/embedded-apps/app-extensions/navigation/create-navigation-link" target="_blank">see the Shopify documentation.</a></p>
  </Page>
)
export default Pricing;