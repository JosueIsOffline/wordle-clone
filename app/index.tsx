import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Icon from "@/assets/images/wordle-icon.svg";
import { Link } from "expo-router";
import { format } from "date-fns";
import { Colors } from "@/constants/Colors";
import ThemedText from "@/components/ThemedText";

export default function Index() {
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? "light"].background;
  const textColor = Colors[colorScheme ?? "light"].text;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.header}>
        <Icon width={100} height={70} />
        <ThemedText style={styles.title}>Wordle</ThemedText>
        <ThemedText style={styles.text}>
          Get 6 chances to guess a 5-letter word.
        </ThemedText>
      </View>

      <View style={styles.menu}>
        <Link
          href={"/game"}
          style={[
            styles.btn,
            {
              backgroundColor: colorScheme === "light" ? "#000" : "#4a4a4a",
            },
          ]}
          asChild
        >
          <TouchableOpacity>
            <Text style={[styles.btnText, styles.primaryText]}>Play</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity
          style={[
            styles.btn,
            { borderColor: textColor },
          ]}
        >
          <ThemedText style={styles.btnText}>Log in</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            { borderColor: textColor },
          ]}
        >
          <ThemedText style={styles.btnText}>Suscribe</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <ThemedText style={styles.footerDate}>
          {format(new Date(), "MMMM d, yyyy")}
        </ThemedText>
        <ThemedText style={styles.footerText}>No. 1249</ThemedText>
        <ThemedText style={styles.footerText}>
          Edited by Josue Hernandez
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
    gap: 40,
  },
  header: {
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 40,
    fontFamily: "FrankRuhlLibre_800ExtraBold",
  },
  text: {
    fontSize: 26,
    textAlign: "center",
  },
  menu: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
  },
  footerDate: {
    fontSize: 14,
    fontWeight: "bold",
  },
  btn: {
    justifyContent: "center",
    borderRadius: 30,
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    width: "60%",
    maxWidth: 200,
  },
  btnText: {
    padding: 14,
    fontSize: 20,
    fontWeight: "semibold",
    color: "#333",
  },
  primaryText: {
    color: "#fff",
  },
});
