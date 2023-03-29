import { View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

export default function RickMorty() {
  return (
    <View>
      <Card>
        <Card.Title>Nome do Episódio</Card.Title>
        <Card.Content>Descrição do episódio
            <Title>Titulo do Episodio</Title>
            <Paragraph>Descrição do Episódio</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/300" }} />
      </Card>
    </View>
  );
}
