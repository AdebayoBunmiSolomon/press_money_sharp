import { CustomButton, CustomInput, CustomText } from "@src/components/shared";
import { colors } from "@src/resources/colors/colors";
import { DVW, moderateScale } from "@src/resources/scaling";
import { CircleX } from "lucide-react-native";
import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View } from "react-native";

interface IFilterProps {
  visible: boolean;
  onCloseModal: () => void;
}

export const Filter: React.FC<IFilterProps> = ({ visible, onCloseModal }) => {
  const [search, setSearch] = useState<string>("");
  const [motor, setMotor] = useState<string>("");
  return (
    <View style={styles.container}>
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
            <CustomButton
              buttonType='Solid'
              bgRed
              textType='Medium'
              textWhite
              textSize={14}
              onPress={() => {}}
              title='Filters'
              style={{
                width: "100%",
                borderRadius: moderateScale(10),
                marginVertical: moderateScale(5),
              }}
            />
            <View style={styles.formContainer}>
              <CustomInput
                placeholder='search'
                searchInput
                value={search}
                onChangeText={(value) => setSearch(value)}
                type='custom'
                style={styles.input}
                textInputStyle={styles.textInputStyle}
                placeHolderColor={colors.black}
              />
              <CustomInput
                placeholder='Select'
                value={motor}
                onChangeText={(value) => setMotor(value)}
                type='dropdown'
                style={styles.input}
                textInputStyle={styles.textInputStyle}
                dropDownItems={["Toyota", "Nissan", "Honda"]}
                onSelectDropDownItem={(value) => setMotor(value)}
              />
              <View style={styles.priceContainer}>
                <CustomText type='Medium' size={14} textBlack>
                  Price
                </CustomText>
                <View style={styles.priceInputContainer}>
                  <CustomInput
                    placeholder='Select'
                    value={motor}
                    onChangeText={(value) => setMotor(value)}
                    type='dropdown'
                    style={styles.leftInput}
                    textInputStyle={{
                      width: "70%",
                    }}
                    dropDownItems={["Toyota", "Nissan", "Honda"]}
                    onSelectDropDownItem={(value) => setMotor(value)}
                  />
                  <CustomInput
                    placeholder='Select'
                    value={motor}
                    onChangeText={(value) => setMotor(value)}
                    type='dropdown'
                    style={styles.rightInput}
                    textInputStyle={{
                      width: "70%",
                    }}
                    dropDownItems={["Toyota", "Nissan", "Honda"]}
                    onSelectDropDownItem={(value) => setMotor(value)}
                  />
                </View>
              </View>
              {/* year */}
              <View style={styles.priceContainer}>
                <CustomText type='Medium' size={14} textBlack>
                  Year
                </CustomText>
                <View style={styles.priceInputContainer}>
                  <CustomInput
                    placeholder='Select'
                    value={motor}
                    onChangeText={(value) => setMotor(value)}
                    type='dropdown'
                    style={styles.leftInput}
                    textInputStyle={{
                      width: "70%",
                    }}
                    dropDownItems={["Toyota", "Nissan", "Honda"]}
                    onSelectDropDownItem={(value) => setMotor(value)}
                  />
                  <CustomInput
                    placeholder='Select'
                    value={motor}
                    onChangeText={(value) => setMotor(value)}
                    type='dropdown'
                    style={styles.rightInput}
                    textInputStyle={{
                      width: "70%",
                    }}
                    dropDownItems={["Toyota", "Nissan", "Honda"]}
                    onSelectDropDownItem={(value) => setMotor(value)}
                  />
                </View>
              </View>
              {/* millage */}
              <View style={styles.priceContainer}>
                <CustomText type='Medium' size={14} textBlack>
                  Price
                </CustomText>
                <View style={styles.priceInputContainer}>
                  <CustomInput
                    placeholder='Select'
                    value={motor}
                    onChangeText={(value) => setMotor(value)}
                    type='dropdown'
                    style={styles.leftInput}
                    textInputStyle={{
                      width: "70%",
                    }}
                    dropDownItems={["Toyota", "Nissan", "Honda"]}
                    onSelectDropDownItem={(value) => setMotor(value)}
                  />
                  <CustomInput
                    placeholder='Select'
                    value={motor}
                    onChangeText={(value) => setMotor(value)}
                    type='dropdown'
                    style={styles.rightInput}
                    textInputStyle={{
                      width: "70%",
                    }}
                    dropDownItems={["Toyota", "Nissan", "Honda"]}
                    onSelectDropDownItem={(value) => setMotor(value)}
                  />
                </View>
              </View>
            </View>
            <CustomButton
              title='Search Cars'
              bgRed
              textWhite
              textType='Regular'
              textSize={14}
              onPress={() => {}}
              style={{
                paddingVertical: moderateScale(5),
                width: "35%",
                borderRadius: moderateScale(5),
                marginVertical: moderateScale(10),
                alignSelf: "flex-end",
              }}
              buttonType='Solid'
            />
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
  modalForm: {
    backgroundColor: colors.white,
    width: "90%",
    height: "80%",
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
  formContainer: {
    backgroundColor: "#F4F4F4",
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(5),
    width: "100%",
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: DVW(0.2),
    borderColor: colors.red,
  },
  textInputStyle: {
    color: colors.black,
  },
  priceContainer: {
    marginTop: moderateScale(10),
  },
  priceInputContainer: {
    flexDirection: "row",
    overflow: "hidden",
    marginTop: moderateScale(-20),
  },
  leftInput: {
    width: "68%",
    backgroundColor: colors.white,
    borderWidth: 0,
  },
  rightInput: {
    width: "72%",
    marginLeft: moderateScale(-25),
    backgroundColor: colors.white,
    borderWidth: 0,
  },
});
