import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ArrowUpRight, TrendingUp } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.nameText}>Sarah Johnson</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Active Projects</Text>
          <Text style={styles.statValue}>12</Text>
          <View style={styles.statTrend}>
            <TrendingUp size={16} color="#34C759" />
            <Text style={styles.trendText}>+23.5%</Text>
          </View>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Pending Escrow</Text>
          <Text style={styles.statValue}>$24.5k</Text>
          <View style={styles.statTrend}>
            <TrendingUp size={16} color="#34C759" />
            <Text style={styles.trendText}>+12.3%</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Projects</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.projectsScroll}>
          {[1, 2, 3].map((item) => (
            <TouchableOpacity key={item} style={styles.projectCard}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }}
                style={styles.projectImage}
              />
              <View style={styles.projectInfo}>
                <Text style={styles.projectTitle}>Website Redesign</Text>
                <Text style={styles.projectAmount}>$5,000</Text>
                <View style={styles.projectStatus}>
                  <View style={[styles.statusDot, { backgroundColor: '#34C759' }]} />
                  <Text style={styles.statusText}>In Progress</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
            <ArrowUpRight size={16} color="#007AFF" />
          </TouchableOpacity>
        </View>
        {[1, 2, 3].map((item) => (
          <View key={item} style={styles.activityItem}>
            <View style={styles.activityIcon}>
              <TrendingUp size={20} color="#007AFF" />
            </View>
            <View style={styles.activityInfo}>
              <Text style={styles.activityTitle}>New milestone completed</Text>
              <Text style={styles.activitySubtitle}>Website Redesign Project</Text>
            </View>
            <Text style={styles.activityTime}>2h ago</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#8E8E93',
  },
  nameText: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#000000',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statLabel: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#8E8E93',
  },
  statValue: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#000000',
    marginTop: 4,
  },
  statTrend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  trendText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#34C759',
    marginLeft: 4,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#000000',
  },
  projectsScroll: {
    marginTop: 16,
  },
  projectCard: {
    width: 280,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  projectImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  projectInfo: {
    padding: 16,
  },
  projectTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  projectAmount: {
    fontFamily: 'Inter_700Bold',
    fontSize: 20,
    color: '#007AFF',
    marginTop: 4,
  },
  projectStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#8E8E93',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#007AFF',
    marginRight: 4,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityInfo: {
    flex: 1,
    marginLeft: 12,
  },
  activityTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#000000',
  },
  activitySubtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 2,
  },
  activityTime: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#8E8E93',
  },
});