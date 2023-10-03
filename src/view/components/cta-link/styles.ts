import { StyleSheet } from "react-native";
import { Colors, Layout } from "../../../globals";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: Colors.gray[400],
    marginBottom: Layout.zero,
  },
  linkTextStyle: {
    color: Colors.primary["DEFAULT"],
    fontWeight: "bold",
  },
});
