import React, { useState, useEffect } from 'react';
import Table from '../UI/Table';
import Button from '../UI/Button';
import FormModal from '../UI/FormModal';
import ConfirmationModal from '../UI/ConfirmationModal';

// Sample data
// Sample data - 20 users
const initialUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', status: 'Active', createdAt: '2024-01-16' },
    { id: 3, name: 'Mike Johnson', email: 'mike.johnson@example.com', role: 'Moderator', status: 'Inactive', createdAt: '2024-01-17' },
    { id: 4, name: 'Sarah Wilson', email: 'sarah.wilson@example.com', role: 'User', status: 'Active', createdAt: '2024-01-18' },
    { id: 5, name: 'David Brown', email: 'david.brown@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-19' },
    { id: 6, name: 'Emily Davis', email: 'emily.davis@example.com', role: 'User', status: 'Active', createdAt: '2024-01-20' },
    { id: 7, name: 'Robert Garcia', email: 'robert.garcia@example.com', role: 'Moderator', status: 'Suspended', createdAt: '2024-01-21' },
    { id: 8, name: 'Lisa Martinez', email: 'lisa.martinez@example.com', role: 'User', status: 'Active', createdAt: '2024-01-22' },
    { id: 9, name: 'Thomas Anderson', email: 'thomas.anderson@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-23' },
    { id: 10, name: 'Jennifer Lee', email: 'jennifer.lee@example.com', role: 'User', status: 'Inactive', createdAt: '2024-01-24' },
    { id: 11, name: 'Michael Taylor', email: 'michael.taylor@example.com', role: 'User', status: 'Active', createdAt: '2024-01-25' },
    { id: 12, name: 'Amanda White', email: 'amanda.white@example.com', role: 'Moderator', status: 'Active', createdAt: '2024-01-26' },
    { id: 13, name: 'Christopher Harris', email: 'chris.harris@example.com', role: 'User', status: 'Suspended', createdAt: '2024-01-27' },
    { id: 14, name: 'Michelle Clark', email: 'michelle.clark@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-28' },
    { id: 15, name: 'Daniel Walker', email: 'daniel.walker@example.com', role: 'User', status: 'Active', createdAt: '2024-01-29' },
    { id: 16, name: 'Karen Hall', email: 'karen.hall@example.com', role: 'User', status: 'Inactive', createdAt: '2024-01-30' },
    { id: 17, name: 'James Allen', email: 'james.allen@example.com', role: 'Moderator', status: 'Active', createdAt: '2024-01-31' },
    { id: 18, name: 'Patricia Young', email: 'patricia.young@example.com', role: 'User', status: 'Active', createdAt: '2024-02-01' },
    { id: 19, name: 'Matthew King', email: 'matthew.king@example.com', role: 'Admin', status: 'Suspended', createdAt: '2024-02-02' },
    { id: 20, name: 'Jessica Scott', email: 'jessica.scott@example.com', role: 'User', status: 'Active', createdAt: '2024-02-03' }
  ];
  

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  
  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Form fields configuration
  const userFields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter full name' },
    { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Enter email address' },
    { 
      name: 'role', 
      label: 'Role', 
      type: 'select', 
      required: true,
      options: [
        { value: 'Admin', label: 'Administrator' },
        { value: 'Moderator', label: 'Moderator' },
        { value: 'User', label: 'User' }
      ]
    },
    { 
      name: 'status', 
      label: 'Status', 
      type: 'select', 
      required: true,
      options: [
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'Suspended', label: 'Suspended' }
      ]
    },
    { name: 'avatar', label: 'Profile Picture', type: 'file' }
  ];

  // Search functionality
  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm, users]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Modal handlers
  const handleAdd = (userData) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newUser = {
        id: users.length + 1,
        ...userData,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setUsers(prev => [newUser, ...prev]);
      setIsAddModalOpen(false);
      setLoading(false);
    }, 1000);
  };

  const handleEdit = (userData) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUsers(prev => prev.map(user => 
        user.id === selectedUser.id ? { ...user, ...userData } : user
      ));
      setIsEditModalOpen(false);
      setSelectedUser(null);
      setLoading(false);
    }, 1000);
  };

  const handleDelete = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUsers(prev => prev.filter(user => user.id !== selectedUser.id));
      setIsDeleteModalOpen(false);
      setSelectedUser(null);
      setLoading(false);
    }, 1000);
  };

  const openEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  // Table columns
  const columns = [
    { 
      key: 'name', 
      title: 'Name',
      render: (value, user) => (
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm font-medium">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <div className="font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      )
    },
    { key: 'role', title: 'Role' },
    { 
      key: 'status', 
      title: 'Status',
      render: (value) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          value === 'Active' ? 'bg-green-100 text-green-800' :
          value === 'Inactive' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
    { key: 'createdAt', title: 'Joined Date' },
    {
      key: 'actions',
      title: 'Actions',
      render: (value, user) => (
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="small"
            onClick={() => openEditModal(user)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="small"
            onClick={() => openDeleteModal(user)}
          >
            Delete
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-600">Manage your system users</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)}>
          Add New User
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search users by name, email, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="flex space-x-2">
            <select className="input-field w-full sm:w-auto">
              <option>All Roles</option>
              <option>Admin</option>
              <option>Moderator</option>
              <option>User</option>
            </select>
            <select className="input-field w-full sm:w-auto">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
        <Table
          columns={columns}
          data={currentUsers}
          keyField="id"
        />
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white rounded-lg shadow-md border border-gray-200 p-4">
          <div className="text-sm text-gray-700">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredUsers.length)} of {filteredUsers.length} users
          </div>
          <div className="flex space-x-1">
            <Button
              variant="outline"
              size="small"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={currentPage === page ? 'primary' : 'outline'}
                size="small"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              size="small"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      {/* Add User Modal */}
      <FormModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAdd}
        title="Add New User"
        fields={userFields}
        submitText="Add User"
        loading={loading}
      />

      {/* Edit User Modal */}
      <FormModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedUser(null);
        }}
        onSubmit={handleEdit}
        title="Edit User"
        fields={userFields}
        initialData={selectedUser || {}}
        submitText="Update User"
        loading={loading}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedUser(null);
        }}
        onConfirm={handleDelete}
        title="Delete User"
        message={`Are you sure you want to delete ${selectedUser?.name}? This action cannot be undone.`}
        confirmText="Delete User"
        loading={loading}
      />
    </div>
  );
};

export default Users;
