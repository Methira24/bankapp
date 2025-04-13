import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import { Search as SearchIcon, Filter, Star, MapPin, Briefcase } from 'lucide-react-native';

const categories = [
  { id: 1, name: 'Design', icon: '🎨' },
  { id: 2, name: 'Development', icon: '💻' },
  { id: 3, name: 'Marketing', icon: '📈' },
  { id: 4, name: 'Writing', icon: '✍️' },
  { id: 5, name: 'Video', icon: '🎥' },
  { id: 6, name: 'Music', icon: '🎵' },
];

const professionals = [
  {
    id: 1,
    name: 'Emma Wilson',
    title: 'UI/UX Designer',
    rating: 4.9,
    reviews: 127,
    location: 'San Francisco, CA',
    hourlyRate: 85,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60',
    tags: ['UI Design', 'User Research', 'Figma'],
  },
  {
    id: 2,
    name: 'Marcus Chen',
    title: 'Full Stack Developer',
    rating: 4.8,
    reviews: 93,
    location: 'New York, NY',
    hourlyRate: 95,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
  {
    id: 3,
    name: 'Sofia Rodriguez',
    title: 'Digital Marketing Specialist',
    rating: 4.7,
    reviews: 156,
    location: 'Miami, FL',
    hourlyRate: 75,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60',
    tags: ['SEO', 'Social Media', 'Content Strategy'],
  },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Find Talent</Text>
        <Text style={styles.subtitle}>Connect with top professionals for your projects</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <SearchIcon size={20} color="#8E8E93" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by skill, name, or location"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#8E8E93"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Browse Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
          {categories.map((category) => (
            <TouchableOpacity key={category.id} style={styles.categoryCard}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.sectionTitle}>Top Professionals</Text>
        {professionals.map((professional) => (
          <TouchableOpacity key={professional.id} style={styles.professionalCard}>
            <Image source={{ uri: professional.image }} style={styles.profileImage} />
            <View style={styles.professionalInfo}>
              <View style={styles.nameContainer}>
                <Text style={styles.professionalName}>{professional.name}</Text>
                <View style={styles.ratingContainer}>
                  <Star size={16} color="#FFB800" fill="#FFB800" />
                  <Text style={styles.rating}>{professional.rating}</Text>
                  <Text style={styles.reviews}>({professional.reviews})</Text>
                </View>
              </View>
              <Text style={styles.professionalTitle}>{professional.title}</Text>
              <View style={styles.locationContainer}>
                <MapPin size={14} color="#8E8E93" />
                <Text style={styles.location}>{professional.location}</Text>
              </View>
              <View style={styles.rateContainer}>
                <Briefcase size={14} color="#8E8E93" />
                <Text style={styles.rate}>${professional.hourlyRate}/hr</Text>
              </View>
              <View style={styles.tagsContainer}>
                {professional.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
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
  contentContainer: {
    paddingBottom: 24,
  },
  header: {
    padding: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: '#000000',
  },
  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#8E8E93',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#000000',
  },
  filterButton: {
    width: 44,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 18,
    color: '#000000',
    marginBottom: 16,
  },
  categoriesScroll: {
    marginBottom: 24,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  categoryName: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#000000',
  },
  resultsContainer: {
    paddingHorizontal: 16,
  },
  professionalCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  professionalInfo: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  professionalName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#000000',
    marginLeft: 4,
  },
  reviews: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 2,
  },
  professionalTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  location: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 4,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rate: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#007AFF',
    marginLeft: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 8,
  },
  tag: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  tagText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#8E8E93',
  },
});