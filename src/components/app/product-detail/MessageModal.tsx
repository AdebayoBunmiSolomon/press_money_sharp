import { CustomButton, CustomInput, CustomText } from "@src/components/shared";
import { colors } from "@src/resources/colors/colors";
import { DVW, moderateScale } from "@src/resources/scaling";
import { CircleX, MessageSquareMore } from "lucide-react-native";
import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

interface IFilterProps {
  visible: boolean;
  onCloseModal: () => void;
}

type formInputType = {
  name: string;
  email: string;
  phone: string;
};

export const MessageModal: React.FC<IFilterProps> = ({
  visible,
  onCloseModal,
}) => {
  const [formInput, setFormInput] = useState<formInputType>({
    name: "",
    email: "",
    phone: "",
  });
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
              <CustomText type='Medium' size={14} textWhite>
                Contact PressMoneySharp
              </CustomText>
              <TouchableOpacity onPress={() => onCloseModal()}>
                <CircleX
                  size={moderateScale(20)}
                  color={colors.white}
                  strokeWidth={1.3}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                gap: moderateScale(15),
              }}>
              <CustomInput
                title='Name'
                titleColor={colors.white}
                titleType='Medium'
                placeholder='Name'
                value={formInput.name}
                onChangeText={(value) =>
                  setFormInput({
                    ...formInput,
                    name: value,
                  })
                }
                type='custom'
                style={styles.input}
                textInputStyle={styles.textInputStyle}
                placeHolderColor={colors.black}
              />
              <CustomInput
                title='Email'
                titleColor={colors.white}
                titleType='Medium'
                placeholder='Email'
                value={formInput.email}
                onChangeText={(value) =>
                  setFormInput({
                    ...formInput,
                    email: value,
                  })
                }
                type='custom'
                style={styles.input}
                textInputStyle={styles.textInputStyle}
                placeHolderColor={colors.black}
              />
              <CustomInput
                title='Phone'
                titleColor={colors.white}
                titleType='Medium'
                placeholder='Phone'
                value={formInput.phone}
                onChangeText={(value) =>
                  setFormInput({
                    ...formInput,
                    phone: value,
                  })
                }
                type='custom'
                style={styles.input}
                textInputStyle={styles.textInputStyle}
                placeHolderColor={colors.black}
                keyboardType='phone-pad'
              />
              <CustomButton
                title='Submit'
                buttonType='Solid'
                bgWhite
                textType='Medium'
                onPress={() => {}}
                style={{
                  paddingVertical: moderateScale(10),
                  borderRadius: moderateScale(10),
                  width: "100%",
                  alignSelf: "center",
                  marginBottom: moderateScale(30),
                }}
                leftIcon={
                  <MessageSquareMore
                    color={colors.black}
                    size={moderateScale(20)}
                  />
                }
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
    backgroundColor: colors.red,
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
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 0,
  },
  textInputStyle: {
    color: colors.black,
  },
});
