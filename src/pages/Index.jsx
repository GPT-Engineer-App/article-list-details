import { Box, Flex, Heading, Image, Text, VStack, LinkBox, LinkOverlay, Button } from "@chakra-ui/react";
import { useState } from "react";

// Mock data for articles
const articles = [
  {
    id: 1,
    headline: "Exploring the Future of Renewable Energy",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3l8ZW58MHx8fHwxNzE0NjQ1NzExfDA&ixlib=rb-4.0.3&q=80&w=1080",
    source: "Nature Energy",
    content: "Renewable energy is set to transform how we produce and consume energy, reducing our carbon footprint and promoting sustainability.",
    relatedArticles: [2, 3],
  },
  {
    id: 2,
    headline: "Advancements in AI and Machine Learning",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGFuZCUyME1hY2hpbmUlMjBMZWFybmluZ3xlbnwwfHx8fDE3MTQ2NDU3MTF8MA&ixlib=rb-4.0.3&q=80&w=1080",
    source: "TechCrunch",
    content: "AI and machine learning continue to evolve, pushing the boundaries of what machines can learn and do.",
    relatedArticles: [1, 3],
  },
  {
    id: 3,
    headline: "The Impact of Climate Change on Global Economies",
    image: "https://images.unsplash.com/photo-1581059765118-a5959fba53bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlJTIwZWNvbm9teXxlbnwwfHx8fDE3MTQ2NDU3MTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    source: "Economic Times",
    content: "Climate change poses significant risks to global economies, influencing policy decisions and corporate strategies.",
    relatedArticles: [1, 2],
  },
];

const ArticleList = ({ onSelectArticle }) => {
  return (
    <VStack spacing={8} align="stretch">
      {articles.map((article) => (
        <LinkBox as="article" key={article.id} p={5} borderWidth="1px" rounded="md">
          <Flex direction="column" align="start">
            <Image src={article.image} alt={article.headline} borderRadius="md" />
            <Heading size="md" my="2">
              <LinkOverlay href="#" onClick={() => onSelectArticle(article)}>
                {article.headline}
              </LinkOverlay>
            </Heading>
            <Text fontSize="sm">Source: {article.source}</Text>
          </Flex>
        </LinkBox>
      ))}
    </VStack>
  );
};

const ArticleDetails = ({ article, onBack }) => {
  const relatedArticles = articles.filter((a) => article.relatedArticles.includes(a.id));

  return (
    <VStack spacing={4} align="stretch">
      <Button onClick={onBack}>Back to Articles</Button>
      <Box p={5} borderWidth="1px" rounded="md">
        <Image src={article.image} alt={article.headline} borderRadius="md" />
        <Heading size="lg" my="2">
          {article.headline}
        </Heading>
        <Text fontSize="sm">Source: {article.source}</Text>
        <Text mt={4}>{article.content}</Text>
      </Box>
      <Heading size="md" mt={6}>
        Related Articles
      </Heading>
      {relatedArticles.map((a) => (
        <Flex key={a.id} p={3} borderWidth="1px" rounded="md" justify="space-between" align="center">
          <Text fontWeight="bold">{a.headline}</Text>
          <Button onClick={() => onBack(a)}>View</Button>
        </Flex>
      ))}
    </VStack>
  );
};

const Index = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  return <Box p={5}>{!selectedArticle ? <ArticleList onSelectArticle={handleSelectArticle} /> : <ArticleDetails article={selectedArticle} onBack={handleBack} />}</Box>;
};

export default Index;
