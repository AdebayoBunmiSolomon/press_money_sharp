import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Header } from "@src/common";
import { colors } from "@src/resources/colors/colors";
import { RootStackParamList } from "@src/router/types";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollContainer } from "../Scroll-Container";
import { CustomButton, CustomInput, CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/scaling";

type formInputTypes = {
  name: string;
  email: string;
  phone_number: string;
  message: string;
};

export const ConsultationService = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [screenScroll, setScreenScroll] = useState<number>(0);
  const [formInput, setFormInput] = useState<formInputTypes>({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  return (
    <>
      <StatusBar backgroundColor={colors.white} />
      <SafeAreaView style={styles.mainContainer}>
        <Header
          onPressBackArrow={() => navigation.goBack()}
          containerStyle={styles.headerContainerStyle}
          showBackArrow
          textColor={colors.black}
          onPressHamBuggerBtn={() => {}}
        />
        <View style={styles.formTitle}>
          <CustomText type='Semi-Bold' size={20} textBlack>
            Need A Consultation
          </CustomText>
          <CustomText type='Regular' size={16} textBlack>
            2010 Models and Never
          </CustomText>
        </View>
        <ScrollContainer
          style={styles.scrollContainer}
          setScreenScroll={(index) => setScreenScroll(index)}>
          <CustomInput
            placeholder='Your Name'
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
            placeholder='Phone Number'
            value={formInput.phone_number}
            onChangeText={(value) =>
              setFormInput({
                ...formInput,
                phone_number: value,
              })
            }
            type='custom'
            style={styles.input}
            textInputStyle={styles.textInputStyle}
            placeHolderColor={colors.black}
            keyboardType='phone-pad'
          />

          <CustomInput
            placeholder='Message'
            value={formInput.message}
            onChangeText={(value) =>
              setFormInput({
                ...formInput,
                message: value,
              })
            }
            type='custom'
            style={[
              styles.input,
              {
                height: DVH(17),
              },
            ]}
            textInputStyle={styles.textInputStyle}
            placeHolderColor={colors.black}
            multiLine
          />
          <CustomButton
            title='Schedule a Call'
            bgRed
            buttonType='Solid'
            textType='Regular'
            textWhite
            onPress={() => {}}
            style={{
              width: "100%",
              borderRadius: moderateScale(10),
              alignSelf: "center",
              marginVertical: moderateScale(10),
            }}
          />
        </ScrollContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.cream,
    flex: 1,
  },
  headerContainerStyle: {
    backgroundColor: colors.white,
  },
  formTitle: {
    alignItems: "center",
    paddingVertical: moderateScale(10),
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(5),
    paddingBottom: DVH(10),
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: DVW(0.2),
    borderColor: "transparent",
  },
  textInputStyle: {
    color: colors.black,
  },
});
