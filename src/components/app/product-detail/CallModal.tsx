import { CustomButton, CustomText } from "@src/components/shared";
import { colors } from "@src/resources/colors/colors";
import { DVW, moderateScale } from "@src/resources/scaling";
import { CircleX } from "lucide-react-native";
import React from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

interface IFilterProps {
  visible: boolean;
  onCloseModal: () => void;
}

export const CallModal: React.FC<IFilterProps> = ({
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
            <View style={styles.titleContainer}>
              <CustomText type='Semi-Bold' size={14} textDarkGray>
                Call PressMONEYSHARP on
              </CustomText>
              <CustomText type='Semi-Bold' size={14} textBlack>
                09034567789
              </CustomText>
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                title='Cancel'
                buttonType='Outline'
                textType='Medium'
                onPress={() => onCloseModal()}
                textRed
                style={{
                  width: "45%",
                  borderRadius: moderateScale(10),
                  paddingVertical: moderateScale(12),
                  borderColor: colors.red,
                }}
              />
              <CustomButton
                title='Confirm'
                buttonType='Solid'
                textType='Medium'
                onPress={() => {}}
                textWhite
                bgRed
                style={{
                  width: "45%",
                  borderRadius: moderateScale(10),
                  paddingVertical: moderateScale(12),
                  borderColor: colors.red,
                  borderWidth: DVW(0.3),
                }}
              />
            </View>
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
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingVertical: moderateScale(10),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(10),
  },
});
