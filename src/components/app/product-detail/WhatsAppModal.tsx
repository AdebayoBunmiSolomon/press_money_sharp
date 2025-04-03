import { CustomText } from "@src/components/shared";
import { colors } from "@src/resources/colors/colors";
import { moderateScale } from "@src/resources/scaling";
import { CircleX } from "lucide-react-native";
import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface IFilterProps {
  visible: boolean;
  onCloseModal: () => void;
}

export const WhatsAppModal: React.FC<IFilterProps> = ({
  visible,
  onCloseModal,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Modal
        visible={visible}
        onRequestClose={() => onCloseModal()}
        animationType='fade'
        transparent>
        <View
          style={[
            styles.container,
            {
              backgroundColor: colors.modalBg,
              justifyContent: "center",
              alignItems: "center",
            },
          ]}>
          <View style={styles.modalForm}>
            <View style={styles.modalHeaderContainer}>
              <View />
              <CustomText type='Medium' size={14} textBlack>
                Filters
              </CustomText>
              <TouchableOpacity onPress={() => onCloseModal()}>
                <CircleX
                  size={moderateScale(20)}
                  color={colors.black}
                  strokeWidth={1.3}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.titleContainer}>
              <FontAwesome
                color={"#25D366"}
                size={moderateScale(30)}
                name='whatsapp'
              />
              <CustomText type='Semi-Bold' size={14} textBlack>
                Start WhatsApp Chat
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  modalForm: {
    backgroundColor: "#FEFEFE",
    width: "90%",
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    borderRadius: moderateScale(10),
    alignSelf: "center",
  },
  modalHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(5),
    backgroundColor: colors.white,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
});
