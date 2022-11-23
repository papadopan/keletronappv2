import { View } from 'react-native'
import React from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { Box, Text } from 'native-base'

export const Bookings = () => {
  const getMaxDate = () => {
    const now = new Date()
    let nextMonthNum = now.getMonth() + 2
    let currentYear = now.getFullYear()
    if (nextMonthNum < 10) {
      nextMonthNum = `0${nextMonthNum}`
    }
    if (nextMonthNum > 11) {
      nextMonthNum = '01'
      currentYear++
    }

    return `${currentYear}-${nextMonthNum}-01`
  }
  return (
    <Box padding={2} flex={1}>
      <Agenda
        items={{
          '2022-12-22': [{ name: 'item 1 - any js object' }],
          '2022-12-23': [{ name: 'item 2 - any js object', height: 80 }],
          '2022-12-24': [],
          '2022-12-25': [
            { name: 'item 3 - any js object' },
            { name: 'any js object' },
          ],
        }}
        loadItemsForMonth={month => {
          console.log('trigger items loading')
        }}
        onCalendarToggled={calendarOpened => {
          console.log(calendarOpened)
        }}
        // Callback that gets called on day press
        onDayPress={day => {
          console.log('day pressed')
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={day => {
          console.log('day changed')
        }}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-11-20'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={getMaxDate()}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={1}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={2}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
          return (
            <View>
              <Text>antonios</Text>
            </View>
          )
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderDay={(day, item) => {
          return (
            <View>
              <Text>antonios</Text>
            </View>
          )
        }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return <Text>...</Text>
        }}
        // Override inner list with a custom implemented component
        renderList={listProps => {
          return <Text>...</Text>
        }}
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
