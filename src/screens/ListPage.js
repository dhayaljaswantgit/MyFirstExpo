import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import { connect } from "react-redux";
import { getList } from "../store/actions/listAction";

class ListPage extends Component {
  componentDidMount() {
    this.fetchList(false);
  }

  fetchList = (pagination = true) => {
    const { getList, listData } = this.props;

    if (!pagination) {
      getList({ data: [], pageNo: 1 });
      return;
    }

    const data = (listData && listData.data) || [];

    const currentPage = (listData && listData.page) || 0;
    const pageNo = currentPage + 1;

    if (!currentPage || pageNo <= listData.total_pages)
      getList({ data, pageNo });
  };

  render() {
    const { listData } = this.props;
    /*
    return (
      <ScrollView>
        {((listData && listData.data) || []).map(
          ({ id, avatar, email, first_name, last_name }) => {
            return (
              <View style={styles.itemMain}>
                <Image source={{ uri: avatar }} style={styles.itemImage} />
                <View>
                  <Text>Id : {id}</Text>
                  <Text>
                    Name : {first_name} {last_name}
                  </Text>
                  <Text>Email : {email}</Text>
                </View>
              </View>
            );
          }
        )}
      </ScrollView>
    );*/

    return (
      <FlatList
        data={(listData && listData.data) || []}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={({ distanceFromEnd }) => {
          if (distanceFromEnd >= 0) this.fetchList();
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => this.fetchList(false)}
          />
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.listReducer.loading,
  listData: state.listReducer.listData,
  error: state.listReducer.error,
});

export default connect(mapStateToProps, { getList })(ListPage);

const renderItem = (item) => {
  const { id, avatar, email, first_name, last_name } = item.item;
  return (
    <View style={styles.itemMain}>
      <Image source={{ uri: avatar }} style={styles.itemImage} />
      <View>
        <Text>Id : {id}</Text>
        <Text>
          Name : {first_name} {last_name}
        </Text>
        <Text>Email : {email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  itemMain: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(255,0,0,.1)",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
