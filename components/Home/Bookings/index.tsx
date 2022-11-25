import { View } from 'react-native'
import React, { useState } from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { Box, Text } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'

export const Bookings = () => {
  const [selectedDay, setSelectedDay] = useState('')

  return (
    <Box padding={2} flex={1}>
      <Agenda
        loadItemsForMonth={month => {
          console.log('trigger items loading')
        }}
        onCalendarToggled={calendarOpened => {
          console.log(calendarOpened)
        }}
        // Callback that gets called on day press
        onDayPress={day => {
          setSelectedDay(day.dateString)
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={day => {
          console.log('day changed', day)
        }}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-11-20'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2022-12-12'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={1}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={2}
        // Specify how each item should be rendered in agenda
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return <Icon name="down" size={18} />
        }}
        // Override inner list with a custom implemented component
        // renderList={listProps => {
        //   return <Text>...</Text>
        // }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return <View />
        }}
        // Specify your item comparison function for increased performance
        // rowHasChanged={(r1, r2) => {
        //   return r1.text !== r2.text;
        // }}
        // Hide knob button. Default = false
        hideKnob={false}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        showClosingKnob={true}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed

        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
        onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Agenda theme
        theme={{
          agendaDayTextColor: 'yellow',
          textDayFontFamily: 'Helvetica Neue',
          textMonthFontFamily: 'Helvetica Neue',
          textDayHeaderFontFamily: 'Helvetica Neue',
          textDayFontWeight: '400',
          textMonthFontWeight: '400',
          textDayHeaderFontWeight: '400',
          textDayHeaderFontSize: 16,
        }}
        // Agenda container style
        style={{}}
      />
    </Box>
  )
}