import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
    actions?: React.ReactNode;
};


export default function Header({
    actions,
}:HeaderProps) {
    return (
        <View style={styles.container}>
            {/* タイトルエリア */}
            <View>
                <Text style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#F97316",
                }}>
                    FOOREAL
                </Text>
            </View>

            {/* ボタンエリア */}
            <View>
                {actions}
            </View>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: "center",
        backgroundColor: "#FFF3E6",

        borderBottomWidth: 1,
        borderBottomColor: "#9E9E9E",
    },
});
