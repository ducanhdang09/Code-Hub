// src/screens/Learning.tsx
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { ArrowLeft2 } from "iconsax-react-native";

type RouteParams = {
  videoUrl: string; // ví dụ: 'https://www.youtube.com/embed/QuZA24FEiIs?...'
};

export default function Learning() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const { videoUrl } = useRoute<any>().params as RouteParams;

  // Chuẩn bị HTML nhúng iframe
  const html = `
    <html><head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body, html { margin:0; padding:0; height:100%; background:#000 }
        iframe { position:absolute; top:0; left:0; width:100%; height:100%; }
      </style>
    </head>
    <body>
      <iframe
        src="${videoUrl}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </body></html>
  `;

  return (
    <Box flex={1} bg="$black">
      {/* Back button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.backButton, { top: top + 12 }]}
        hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
        <ArrowLeft2 size="24" color="#fff" />
      </TouchableOpacity>

      {/* Full-screen WebView */}
      <WebView
        source={{ html }}
        style={styles.webview}
        allowsFullscreenVideo
        javaScriptEnabled
        domStorageEnabled
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: 16,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 8,
    borderRadius: 24,
  },
  webview: {
    flex: 1,
  },
});
